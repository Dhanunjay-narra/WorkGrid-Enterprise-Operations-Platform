export type BiKpisNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisNodeStateMachine {
  private allowedTransitions: Record<BiKpisNodeState, BiKpisNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisNodeState, to: BiKpisNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisNodeState, to: BiKpisNodeState): BiKpisNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisNode: " + from + " -> " + to);
    }
    return to;
  }
}
