export type SupportQueuesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesTaskStateMachine {
  private allowedTransitions: Record<SupportQueuesTaskState, SupportQueuesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesTaskState, to: SupportQueuesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesTaskState, to: SupportQueuesTaskState): SupportQueuesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesTask: " + from + " -> " + to);
    }
    return to;
  }
}
