"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const hour_to_min_1 = __importDefault(require("./utils/hour-to-min"));
const min_to_hour_1 = __importDefault(require("./utils/min-to-hour"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const prisma = new client_1.PrismaClient({
    log: ["query"],
});
app.get("/games", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                },
            },
        },
    });
    return response.json(games);
}));
app.post("/games/:id/ads", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = request.params.id;
    const body = request.body;
    const ad = yield prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: (0, hour_to_min_1.default)(body.hourStart),
            hourEnd: (0, hour_to_min_1.default)(body.hourEnd),
            useVoip: body.useVoip,
        }
    });
    return response.status(201).json(ad);
}));
app.get("/games/:id/ads", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = request.params.id;
    const ads = yield prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoip: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    });
    return response.json(ads.map(ad => {
        return Object.assign(Object.assign({}, ad), { weekDays: ad.weekDays.split(','), hourStart: (0, min_to_hour_1.default)(ad.hourStart), hourEnd: (0, min_to_hour_1.default)(ad.hourEnd) });
    }));
}));
app.get("/ads/:id/discord", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const adsID = request.params.id;
    const ad = yield prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adsID,
        }
    });
    return response.json({
        discord: ad.discord
    });
}));
app.listen(3000);
