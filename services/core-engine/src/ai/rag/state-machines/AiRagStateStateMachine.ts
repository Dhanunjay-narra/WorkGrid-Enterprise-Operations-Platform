export type AiRagStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagStateStateMachine {
  private allowedTransitions: Record<AiRagStateState, AiRagStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagStateState, to: AiRagStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagStateState, to: AiRagStateState): AiRagStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagState: " + from + " -> " + to);
    }
    return to;
  }
}
