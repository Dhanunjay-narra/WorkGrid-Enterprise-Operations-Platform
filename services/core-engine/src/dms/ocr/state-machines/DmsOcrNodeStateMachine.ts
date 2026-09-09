export type DmsOcrNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrNodeStateMachine {
  private allowedTransitions: Record<DmsOcrNodeState, DmsOcrNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrNodeState, to: DmsOcrNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrNodeState, to: DmsOcrNodeState): DmsOcrNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrNode: " + from + " -> " + to);
    }
    return to;
  }
}
