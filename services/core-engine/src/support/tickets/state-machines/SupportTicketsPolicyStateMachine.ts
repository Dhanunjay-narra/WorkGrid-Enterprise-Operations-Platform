export type SupportTicketsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsPolicyStateMachine {
  private allowedTransitions: Record<SupportTicketsPolicyState, SupportTicketsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsPolicyState, to: SupportTicketsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsPolicyState, to: SupportTicketsPolicyState): SupportTicketsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
