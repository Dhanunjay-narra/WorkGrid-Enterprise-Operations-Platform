export type DmsFilesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesPayloadStateMachine {
  private allowedTransitions: Record<DmsFilesPayloadState, DmsFilesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesPayloadState, to: DmsFilesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesPayloadState, to: DmsFilesPayloadState): DmsFilesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
