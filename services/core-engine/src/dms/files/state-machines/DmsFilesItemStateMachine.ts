export type DmsFilesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesItemStateMachine {
  private allowedTransitions: Record<DmsFilesItemState, DmsFilesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesItemState, to: DmsFilesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesItemState, to: DmsFilesItemState): DmsFilesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesItem: " + from + " -> " + to);
    }
    return to;
  }
}
