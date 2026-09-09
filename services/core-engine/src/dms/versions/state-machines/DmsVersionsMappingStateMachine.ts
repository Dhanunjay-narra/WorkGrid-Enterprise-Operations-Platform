export type DmsVersionsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsMappingStateMachine {
  private allowedTransitions: Record<DmsVersionsMappingState, DmsVersionsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsMappingState, to: DmsVersionsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsMappingState, to: DmsVersionsMappingState): DmsVersionsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
