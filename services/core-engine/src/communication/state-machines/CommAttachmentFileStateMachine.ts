export type CommAttachmentFileState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommAttachmentFileStateMachine {
  private validTransitions: Record<CommAttachmentFileState, CommAttachmentFileState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommAttachmentFileState, next: CommAttachmentFileState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommAttachmentFileState, next: CommAttachmentFileState): CommAttachmentFileState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommAttachmentFile: from " + current + " to " + next);
    }
    return next;
  }
}
