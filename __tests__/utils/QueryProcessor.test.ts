import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "ryanhuan";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
        expect(response).toBe("AndrewID: ryanhuan")
    });

   
});