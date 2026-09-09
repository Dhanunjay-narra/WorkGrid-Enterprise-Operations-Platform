export type SupportTicketsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsMappingStateMachine {
  private allowedTransitions: Record<SupportTicketsMappingState, SupportTicketsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsMappingState, to: SupportTicketsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsMappingState, to: SupportTicketsMappingState): SupportTicketsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
