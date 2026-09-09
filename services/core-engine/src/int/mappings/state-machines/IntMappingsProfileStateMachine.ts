export type IntMappingsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsProfileStateMachine {
  private allowedTransitions: Record<IntMappingsProfileState, IntMappingsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsProfileState, to: IntMappingsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsProfileState, to: IntMappingsProfileState): IntMappingsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
