export type ProjectWorkspacesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectWorkspacesQueueStateMachine {
  private allowedTransitions: Record<ProjectWorkspacesQueueState, ProjectWorkspacesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectWorkspacesQueueState, to: ProjectWorkspacesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectWorkspacesQueueState, to: ProjectWorkspacesQueueState): ProjectWorkspacesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectWorkspacesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
