export type ProjectWorkspacesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectWorkspacesPolicyStateMachine {
  private allowedTransitions: Record<ProjectWorkspacesPolicyState, ProjectWorkspacesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectWorkspacesPolicyState, to: ProjectWorkspacesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectWorkspacesPolicyState, to: ProjectWorkspacesPolicyState): ProjectWorkspacesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectWorkspacesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
