export type DmsOcrStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrStateStateMachine {
  private allowedTransitions: Record<DmsOcrStateState, DmsOcrStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrStateState, to: DmsOcrStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrStateState, to: DmsOcrStateState): DmsOcrStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrState: " + from + " -> " + to);
    }
    return to;
  }
}
