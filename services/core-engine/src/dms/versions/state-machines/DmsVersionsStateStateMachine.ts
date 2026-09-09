export type DmsVersionsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsStateStateMachine {
  private allowedTransitions: Record<DmsVersionsStateState, DmsVersionsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsStateState, to: DmsVersionsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsStateState, to: DmsVersionsStateState): DmsVersionsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsState: " + from + " -> " + to);
    }
    return to;
  }
}
