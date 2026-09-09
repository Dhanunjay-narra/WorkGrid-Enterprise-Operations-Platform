export type BiKpisItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisItemStateMachine {
  private allowedTransitions: Record<BiKpisItemState, BiKpisItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisItemState, to: BiKpisItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisItemState, to: BiKpisItemState): BiKpisItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisItem: " + from + " -> " + to);
    }
    return to;
  }
}
