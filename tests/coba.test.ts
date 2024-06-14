import { describe, expect, it } from "vitest";
import { getScoreTeam } from "../src/modules/coba";

describe("getScoreTeam", () => {
    describe("should return basic value", () => {
        it("should return green value", () => {
            const dices = ['green']
            expect(getScoreTeam(dices)).toBe(1);
        });
        it("should return grey value", () => {
            const dices = ['grey']
            expect(getScoreTeam(dices)).toBe(2);
        });
        it("should return rose value", () => {
            const dices = ['rose']
            expect(getScoreTeam(dices)).toBe(3);
        });
        it("should return yellow value", () => {
            const dices = ['yellow']
            expect(getScoreTeam(dices)).toBe(-1);
        });
        it("should return orange value", () => {
            const dices = ['orange']
            expect(getScoreTeam(dices)).toBe(1);
        });
        it("should return blue value", () => {
            const dices = ['blue']
            const nbreDicesOtherTeam = 1;
            expect(getScoreTeam(dices, nbreDicesOtherTeam)).toBe(1);
        });
    });

    describe("should return value without power", () => {
        describe("case two dices", () => {
            it("test with green and grey", () => {
                const dices = ['green', 'grey']
                expect(getScoreTeam(dices)).toBe(3);
            });
            it("test with green and rose", () => {
                const dices = ['green', 'rose']
                expect(getScoreTeam(dices)).toBe(3);
            });
            it("test with green and yellow", () => {
                const dices = ['green', 'yellow']
                expect(getScoreTeam(dices)).toBe(0);
            });
            it("test with two green", () => {
                const dices = ['green', 'green']
                expect(getScoreTeam(dices)).toBe(2);
            });
        });
    });

    describe("should return value with power", () => {
        describe('case orange', () => {
            it("test with only orange", () => {
                const dices = ['orange']
                expect(getScoreTeam(dices)).toBe(1);
            });
            it("test with orange with odd dices", () => {
                const dices = ['orange', 'green', 'grey']
                expect(getScoreTeam(dices)).toBe(4);
            });
            it("test with orange with even dices", () => {
                const dices = ['orange', 'green', 'grey', 'green']
                expect(getScoreTeam(dices)).toBe(6);
            });
        });
        describe('case blue', () => {
            it("test with blue and other team has 2 dices", () => {
                const dices = ['blue', 'green', 'grey']
                const nbreDicesOtherTeam = 2;
                expect(getScoreTeam(dices, nbreDicesOtherTeam)).toBe(5);
            });
        });
        describe('case rose', () => {
            it("test with 2 rose", () => {
                const dices = ['rose', 'rose']
                expect(getScoreTeam(dices)).toBe(6);
            });

            it("test with 2 rose and 1 green", () => {
                const dices = ['rose', 'rose', 'green']
                expect(getScoreTeam(dices)).toBe(6);
            });
            it("test with rose and yellow", () => {
                const dices = ['rose', 'yellow']
                expect(getScoreTeam(dices)).toBe(3);
            });
            it("test with rose and blue and other team has one dice", () => {
                const dices = ['rose', 'blue', 'grey'];
                const nbreDicesOtherTeam = 1;
                expect(getScoreTeam(dices, nbreDicesOtherTeam)).toBe(5);
            });
        });
    });
});