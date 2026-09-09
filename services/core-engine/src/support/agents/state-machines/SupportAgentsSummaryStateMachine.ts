export type SupportAgentsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsSummaryStateMachine {
  private allowedTransitions: Record<SupportAgentsSummaryState, SupportAgentsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsSummaryState, to: SupportAgentsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsSummaryState, to: SupportAgentsSummaryState): SupportAgentsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
