export type DmsFilesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesNodeStateMachine {
  private allowedTransitions: Record<DmsFilesNodeState, DmsFilesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesNodeState, to: DmsFilesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesNodeState, to: DmsFilesNodeState): DmsFilesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesNode: " + from + " -> " + to);
    }
    return to;
  }
}
