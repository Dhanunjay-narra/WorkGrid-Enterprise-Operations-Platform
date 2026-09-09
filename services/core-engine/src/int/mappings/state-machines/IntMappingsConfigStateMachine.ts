export type IntMappingsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsConfigStateMachine {
  private allowedTransitions: Record<IntMappingsConfigState, IntMappingsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsConfigState, to: IntMappingsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsConfigState, to: IntMappingsConfigState): IntMappingsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
