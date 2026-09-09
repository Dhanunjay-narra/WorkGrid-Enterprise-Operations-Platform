export type BiExportsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsNodeStateMachine {
  private allowedTransitions: Record<BiExportsNodeState, BiExportsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsNodeState, to: BiExportsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsNodeState, to: BiExportsNodeState): BiExportsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsNode: " + from + " -> " + to);
    }
    return to;
  }
}
