export type IntMappingsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsThresholdStateMachine {
  private allowedTransitions: Record<IntMappingsThresholdState, IntMappingsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsThresholdState, to: IntMappingsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsThresholdState, to: IntMappingsThresholdState): IntMappingsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
