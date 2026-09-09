export type SupportQueuesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesConfigStateMachine {
  private allowedTransitions: Record<SupportQueuesConfigState, SupportQueuesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesConfigState, to: SupportQueuesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesConfigState, to: SupportQueuesConfigState): SupportQueuesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
