export type BiKpisStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisStateStateMachine {
  private allowedTransitions: Record<BiKpisStateState, BiKpisStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisStateState, to: BiKpisStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisStateState, to: BiKpisStateState): BiKpisStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisState: " + from + " -> " + to);
    }
    return to;
  }
}
