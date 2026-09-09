export type AiToolsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsSummaryStateMachine {
  private allowedTransitions: Record<AiToolsSummaryState, AiToolsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsSummaryState, to: AiToolsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsSummaryState, to: AiToolsSummaryState): AiToolsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
