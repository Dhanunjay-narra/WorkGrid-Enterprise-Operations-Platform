export type SupportTicketsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsNodeStateMachine {
  private allowedTransitions: Record<SupportTicketsNodeState, SupportTicketsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsNodeState, to: SupportTicketsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsNodeState, to: SupportTicketsNodeState): SupportTicketsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsNode: " + from + " -> " + to);
    }
    return to;
  }
}
