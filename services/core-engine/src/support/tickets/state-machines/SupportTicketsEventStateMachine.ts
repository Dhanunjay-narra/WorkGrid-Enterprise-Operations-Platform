export type SupportTicketsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsEventStateMachine {
  private allowedTransitions: Record<SupportTicketsEventState, SupportTicketsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsEventState, to: SupportTicketsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsEventState, to: SupportTicketsEventState): SupportTicketsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
