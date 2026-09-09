export type SupportTicketsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsProfileStateMachine {
  private allowedTransitions: Record<SupportTicketsProfileState, SupportTicketsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsProfileState, to: SupportTicketsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsProfileState, to: SupportTicketsProfileState): SupportTicketsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
