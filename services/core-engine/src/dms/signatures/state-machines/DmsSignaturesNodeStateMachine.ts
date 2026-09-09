export type DmsSignaturesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesNodeStateMachine {
  private allowedTransitions: Record<DmsSignaturesNodeState, DmsSignaturesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesNodeState, to: DmsSignaturesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesNodeState, to: DmsSignaturesNodeState): DmsSignaturesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesNode: " + from + " -> " + to);
    }
    return to;
  }
}
