export type AiToolsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsSessionStateMachine {
  private allowedTransitions: Record<AiToolsSessionState, AiToolsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsSessionState, to: AiToolsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsSessionState, to: AiToolsSessionState): AiToolsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsSession: " + from + " -> " + to);
    }
    return to;
  }
}
