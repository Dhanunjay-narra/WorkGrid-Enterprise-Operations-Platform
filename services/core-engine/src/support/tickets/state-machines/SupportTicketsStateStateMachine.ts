export type SupportTicketsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsStateStateMachine {
  private allowedTransitions: Record<SupportTicketsStateState, SupportTicketsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsStateState, to: SupportTicketsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsStateState, to: SupportTicketsStateState): SupportTicketsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsState: " + from + " -> " + to);
    }
    return to;
  }
}
