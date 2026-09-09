export type BiExportsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsStateStateMachine {
  private allowedTransitions: Record<BiExportsStateState, BiExportsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsStateState, to: BiExportsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsStateState, to: BiExportsStateState): BiExportsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsState: " + from + " -> " + to);
    }
    return to;
  }
}
