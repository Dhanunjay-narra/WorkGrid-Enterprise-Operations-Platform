export type AiRagSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagSessionStateMachine {
  private allowedTransitions: Record<AiRagSessionState, AiRagSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagSessionState, to: AiRagSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagSessionState, to: AiRagSessionState): AiRagSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagSession: " + from + " -> " + to);
    }
    return to;
  }
}
