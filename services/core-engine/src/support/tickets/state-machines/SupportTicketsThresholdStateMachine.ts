export type SupportTicketsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsThresholdStateMachine {
  private allowedTransitions: Record<SupportTicketsThresholdState, SupportTicketsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsThresholdState, to: SupportTicketsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsThresholdState, to: SupportTicketsThresholdState): SupportTicketsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
