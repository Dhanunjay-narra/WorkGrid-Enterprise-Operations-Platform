export type IntMappingsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsQueueStateMachine {
  private allowedTransitions: Record<IntMappingsQueueState, IntMappingsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsQueueState, to: IntMappingsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsQueueState, to: IntMappingsQueueState): IntMappingsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
