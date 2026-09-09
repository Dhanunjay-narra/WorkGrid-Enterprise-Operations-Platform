export type SupportTicketsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsEntryStateMachine {
  private allowedTransitions: Record<SupportTicketsEntryState, SupportTicketsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsEntryState, to: SupportTicketsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsEntryState, to: SupportTicketsEntryState): SupportTicketsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
