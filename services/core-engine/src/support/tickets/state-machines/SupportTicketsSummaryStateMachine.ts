export type SupportTicketsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsSummaryStateMachine {
  private allowedTransitions: Record<SupportTicketsSummaryState, SupportTicketsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsSummaryState, to: SupportTicketsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsSummaryState, to: SupportTicketsSummaryState): SupportTicketsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
