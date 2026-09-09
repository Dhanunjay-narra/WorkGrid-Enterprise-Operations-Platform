export type SupportTicketsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsSessionStateMachine {
  private allowedTransitions: Record<SupportTicketsSessionState, SupportTicketsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsSessionState, to: SupportTicketsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsSessionState, to: SupportTicketsSessionState): SupportTicketsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsSession: " + from + " -> " + to);
    }
    return to;
  }
}
