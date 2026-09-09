export type IntMappingsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsTaskStateMachine {
  private allowedTransitions: Record<IntMappingsTaskState, IntMappingsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsTaskState, to: IntMappingsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsTaskState, to: IntMappingsTaskState): IntMappingsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsTask: " + from + " -> " + to);
    }
    return to;
  }
}
