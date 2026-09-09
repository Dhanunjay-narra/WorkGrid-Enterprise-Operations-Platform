export type AiMemorySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemorySummaryStateMachine {
  private allowedTransitions: Record<AiMemorySummaryState, AiMemorySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemorySummaryState, to: AiMemorySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemorySummaryState, to: AiMemorySummaryState): AiMemorySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemorySummary: " + from + " -> " + to);
    }
    return to;
  }
}
