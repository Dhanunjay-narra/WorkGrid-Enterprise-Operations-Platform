export type AiRagSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagSummaryStateMachine {
  private allowedTransitions: Record<AiRagSummaryState, AiRagSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagSummaryState, to: AiRagSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagSummaryState, to: AiRagSummaryState): AiRagSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagSummary: " + from + " -> " + to);
    }
    return to;
  }
}
