export type IntMappingsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsEventStateMachine {
  private allowedTransitions: Record<IntMappingsEventState, IntMappingsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsEventState, to: IntMappingsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsEventState, to: IntMappingsEventState): IntMappingsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
