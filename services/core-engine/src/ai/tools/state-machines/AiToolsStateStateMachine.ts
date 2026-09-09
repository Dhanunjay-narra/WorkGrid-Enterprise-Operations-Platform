export type AiToolsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsStateStateMachine {
  private allowedTransitions: Record<AiToolsStateState, AiToolsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsStateState, to: AiToolsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsStateState, to: AiToolsStateState): AiToolsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsState: " + from + " -> " + to);
    }
    return to;
  }
}
