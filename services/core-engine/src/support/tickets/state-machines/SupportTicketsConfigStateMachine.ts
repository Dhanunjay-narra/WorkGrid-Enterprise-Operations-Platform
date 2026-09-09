export type SupportTicketsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsConfigStateMachine {
  private allowedTransitions: Record<SupportTicketsConfigState, SupportTicketsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsConfigState, to: SupportTicketsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsConfigState, to: SupportTicketsConfigState): SupportTicketsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
