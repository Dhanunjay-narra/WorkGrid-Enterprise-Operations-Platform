export type AiGatewaySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewaySummaryStateMachine {
  private allowedTransitions: Record<AiGatewaySummaryState, AiGatewaySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewaySummaryState, to: AiGatewaySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewaySummaryState, to: AiGatewaySummaryState): AiGatewaySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewaySummary: " + from + " -> " + to);
    }
    return to;
  }
}
