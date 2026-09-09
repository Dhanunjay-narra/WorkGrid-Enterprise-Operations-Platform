export type SupportQueuesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesStateStateMachine {
  private allowedTransitions: Record<SupportQueuesStateState, SupportQueuesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesStateState, to: SupportQueuesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesStateState, to: SupportQueuesStateState): SupportQueuesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesState: " + from + " -> " + to);
    }
    return to;
  }
}
