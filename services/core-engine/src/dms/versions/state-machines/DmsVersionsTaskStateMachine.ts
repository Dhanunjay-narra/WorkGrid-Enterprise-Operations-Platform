export type DmsVersionsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsTaskStateMachine {
  private allowedTransitions: Record<DmsVersionsTaskState, DmsVersionsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsTaskState, to: DmsVersionsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsTaskState, to: DmsVersionsTaskState): DmsVersionsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsTask: " + from + " -> " + to);
    }
    return to;
  }
}
