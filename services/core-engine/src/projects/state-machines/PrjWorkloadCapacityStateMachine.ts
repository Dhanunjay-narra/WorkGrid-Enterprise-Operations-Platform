export type PrjWorkloadCapacityState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjWorkloadCapacityStateMachine {
  private validTransitions: Record<PrjWorkloadCapacityState, PrjWorkloadCapacityState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjWorkloadCapacityState, next: PrjWorkloadCapacityState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjWorkloadCapacityState, next: PrjWorkloadCapacityState): PrjWorkloadCapacityState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjWorkloadCapacity: from " + current + " to " + next);
    }
    return next;
  }
}
