export type DmsVersionsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsNodeStateMachine {
  private allowedTransitions: Record<DmsVersionsNodeState, DmsVersionsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsNodeState, to: DmsVersionsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsNodeState, to: DmsVersionsNodeState): DmsVersionsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsNode: " + from + " -> " + to);
    }
    return to;
  }
}
