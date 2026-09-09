export type SupportTicketsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsBatchStateMachine {
  private allowedTransitions: Record<SupportTicketsBatchState, SupportTicketsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsBatchState, to: SupportTicketsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsBatchState, to: SupportTicketsBatchState): SupportTicketsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
