export type SupportQueuesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesNodeStateMachine {
  private allowedTransitions: Record<SupportQueuesNodeState, SupportQueuesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesNodeState, to: SupportQueuesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesNodeState, to: SupportQueuesNodeState): SupportQueuesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesNode: " + from + " -> " + to);
    }
    return to;
  }
}
