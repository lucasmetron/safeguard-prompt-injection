import { AIMessage } from "langchain";
import type { GraphState } from "../state.ts";

export async function blockedNode(
  state: GraphState,
): Promise<Partial<GraphState>> {
  return {
    ...state,
    messages: [new AIMessage("Request blocked for safety reasons")],
  };
}
